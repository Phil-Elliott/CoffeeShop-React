import React, { useState, useEffect } from "react"
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core"
import useStyles from "./styles"
import AddressForm from "./AddressForm"
import PaymentForm from "./PaymentForm"
import { commerce } from "../../lib/commerce"
import { Link } from "react-router-dom"

const steps = ["Shipping address", "Payment details"]

const Checkout = ({ cartProducts, onCaptureCheckout, order, error }) => {
  const [checkoutToken, setCheckoutToken] = useState(null)
  const [activeStep, setActiveStep] = useState(0)
  const [shippingData, setShippingData] = useState({})
  const classes = useStyles()

  // Steps used to move the process forward or backwards
  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)
  //const navigate = useNavigate()
  // Generates a checkout token whenever the products list changes
  useEffect(() => {
    if (cartProducts.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cartProducts.id, {
            type: "cart",
          })

          setCheckoutToken(token)
        } catch {
          //if (activeStep !== steps.length) navigate.push("/")
        }
      }

      generateToken()
    }
  }, [cartProducts])

  // The last part of the process that gives a confirmation to the user
  let Confirmation = () =>
    order.customer ? (
      <>
        <div>
          <Typography variant="h5">
            Thank you for your purchase, {order.customer.firstname}{" "}
            {order.customer.lastname}!
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="subtitle2">
            Order ref: {order.customer_reference}
          </Typography>
        </div>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">
          Back to home
        </Button>
      </>
    ) : (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    )

  if (error) {
    Confirmation = () => (
      <>
        <Typography variant="h5">Payment Successful</Typography>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">
          Back to home
        </Button>
      </>
    )
  }

  // Changes to the payment form if the address form was filled out
  const test = (data) => {
    setShippingData(data)
    console.log(data)

    nextStep()
  }

  // Sets the page to the correct form
  const Form = () =>
    activeStep === 0 ? (
      <AddressForm
        checkoutToken={checkoutToken}
        nextStep={nextStep}
        setShippingData={setShippingData}
        test={test}
      />
    ) : (
      <PaymentForm
        checkoutToken={checkoutToken}
        nextStep={nextStep}
        backStep={backStep}
        shippingData={shippingData}
        onCaptureCheckout={onCaptureCheckout}
      />
    )

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
    </>
  )
}

export default Checkout
