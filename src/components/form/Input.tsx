import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, FormErrorMessage } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from 'react-hook-form';

interface InputProps extends ChakraInputProps{
    nameItem:string;
    label?:string;
    error?:FieldError;
}

const InputBase:ForwardRefRenderFunction<HTMLInputElement,InputProps> = ({nameItem,label,error = null, ...rest}, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            { !!label  && <FormLabel htmlFor={nameItem}>{label}</FormLabel>}
            <ChakraInput 
                name={nameItem} 
                id={nameItem}
                focusBorderColor="pink.500"
                bgColor="gray.900"
                variant="filled"
                _hover={{
                    bg: "gray.900"
                }}
                size="lg"
                ref={ref}
                {...rest}
            />
            {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)