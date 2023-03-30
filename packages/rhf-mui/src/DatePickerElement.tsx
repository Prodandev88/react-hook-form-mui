import {
  DatePicker,
  DatePickerProps,
  DatePickerSlotsComponentsProps,
} from '@mui/x-date-pickers/DatePicker'
import {
  Control,
  Controller,
  ControllerProps,
  FieldError,
  Path,
} from 'react-hook-form'
import {TextFieldProps} from '@mui/material'
import {FieldValues} from 'react-hook-form/dist/types/fields'
import {useFormError} from './FormErrorProvider'
import {PickerChangeHandlerContext} from '@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue'

export type DatePickerElementProps<
  T extends FieldValues,
  TInputDate,
  TDate = TInputDate
> = Omit<DatePickerProps<TDate>, 'value' | 'onChange' | 'slotProps'> & {
  name: Path<T>
  required?: boolean
  isDate?: boolean
  parseError?: (error: FieldError) => string
  onChange?: (
    value: TDate,
    keyboardInputValue?: PickerChangeHandlerContext<any>
  ) => void
  validation?: ControllerProps['rules']
  control?: Control<T>
  inputProps?: TextFieldProps
  helperText?: TextFieldProps['helperText']
  textReadOnly?: boolean
  slotProps?: Omit<DatePickerSlotsComponentsProps<TDate>, 'textField'>
}

export default function DatePickerElement<TFieldValues extends FieldValues>({
  parseError,
  name,
  required,
  validation = {},
  inputProps,
  control,
  textReadOnly,
  slotProps,
  ...rest
}: DatePickerElementProps<TFieldValues, any, any>): JSX.Element {
  const errorMsgFn = useFormError()
  const customErrorFn = parseError || errorMsgFn
  if (required && !validation.required) {
    validation.required = 'This field is required'
  }

  return (
    <Controller
      name={name}
      rules={validation}
      control={control}
      defaultValue={null as any}
      render={({field, fieldState: {error}}) => (
        <DatePicker
          {...rest}
          {...field}
          ref={(r) => {
            field.ref(r?.querySelector('input'))
          }}
          onClose={(...args) => {
            field.onBlur()
            if (rest.onClose) {
              rest.onClose(...args)
            }
          }}
          onChange={(v, keyboardInputValue) => {
            // console.log(v, keyboardInputValue)
            field.onChange(v, keyboardInputValue)
            if (typeof rest.onChange === 'function') {
              rest.onChange(v, keyboardInputValue)
            }
          }}
          slotProps={{
            ...slotProps,
            textField: {
              ...inputProps,
              required,
              error: !!error,
              helperText: error
                ? typeof customErrorFn === 'function'
                  ? customErrorFn(error)
                  : error.message
                : inputProps?.helperText || rest.helperText,
              inputProps: {
                ...inputProps?.inputProps,
                ...(textReadOnly && {
                  readonly: true,
                }),
              },
            },
          }}
        />
      )}
    />
  )
}
