import React, { useState, useEffect } from "react"
import { Select, MenuItem, Button, Grid, Typography } from "@material-ui/core"
import { useForm, FormProvider } from "react-hook-form"
import FormInput from "./FormInput"
import { commerce } from "../../lib/commerce"
import { Link } from "react-router-dom"

const AddressForm = ({ checkoutToken, test }) => {
  const methods = useForm()
  const [shippingSubdivisions, setShippingSubdivisions] = useState([])
  const [shippingSubdivision, setShippingSubdivision] = useState("")
  const [shippingOptions, setShippingOptions] = useState([])
  const [shippingOption, setShippingOption] = useState("")

  // Fetches a list of all of the states
  const fetchSubdivisions = async () => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      "US"
    )

    setShippingSubdivisions(subdivisions)
    setShippingSubdivision(Object.keys(subdivisions)[0])
  }

  useEffect(() => {
    fetchSubdivisions()
  }, [])

  useEffect(() => {
    const fetchShippingOptions = async (
      checkoutToken,
      country,
      stateProvince = null
    ) => {
      const options = await commerce.checkout.getShippingOptions(
        checkoutToken.id,
        { country, region: stateProvince }
      )

      setShippingOptions(options)
      setShippingOption(options[0].id)
    }

    if (checkoutToken)
      fetchShippingOptions(checkoutToken, "US", shippingSubdivision)
  }, [shippingSubdivision])

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            test({
              ...data,
              shippingSubdivision,
              shippingOption,
            })
          )}
        >
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="address" label="Address" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" label="ZIP / Postal code" />
            <Grid item xs={12} sm={6}>
              <Select
                value={shippingSubdivision}
                fullWidth
                onChange={(e) => setShippingSubdivision(e.target.value)}
              >
                {Object.entries(shippingSubdivisions)
                  .map(([code, name]) => ({ id: code, label: name }))
                  .map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.label}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
          </Grid>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button component={Link} variant="outlined" to="/cart">
              Back to Cart
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  )
}

export default AddressForm
