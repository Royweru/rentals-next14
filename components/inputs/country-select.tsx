"use client"
import { useKenya } from '@/hooks/use-countries'
import React from 'react'
import Select from 'react-select'
export type CountrySelectValue = {

  latlng:number[],
  region:string,
  value:string
}

interface CountrySelectProps{
  value?:CountrySelectValue,
  onChange:(value:CountrySelectValue)=>void
}

export const CountrySelect:React.FC<CountrySelectProps> = ({
  value,
  onChange
}) => {
  const {getAll} = useKenya()
  return (
    <Select
     placeholder="Select a country"
     isClearable
     options={getAll()}
     value={value}
     onChange={(value)=>onChange(value as CountrySelectValue)}
    />
  )
}
