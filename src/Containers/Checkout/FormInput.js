import React from "react"
import { TextField, Grid } from "@material-ui/core"
import { useFormContext, Controller } from "react-hook-form"

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext()
  const isError = false

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField {...field} label={label} fullWidth required={required} />
        )}
      />
    </Grid>
  )
}

export default FormInput

/*
render={({ field }) => <TextField {...field} />}
        name={name}
        control={control}
        label={label}
        fullWidth
        required={required}


        control={control}
        render={({ field }) => (
          <TextField
            fullWidth
            label={label}
            name={name}
            required={required}
            error={isError}
          />
        )}
*/
