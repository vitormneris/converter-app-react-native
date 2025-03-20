export function celsiusToFahrenheit(celsius: number): number {
    return parseFloat((((celsius * 9) / 5) + 32).toFixed(2))
}

export function celsiusToKelvin(celsius: number): number {
    return parseFloat((Number(celsius) + 273).toFixed(2))
}

export function fahrenheitToCelsius(fahrenheit: number): number {
    return parseFloat((((fahrenheit - 32) * 5) / 9).toFixed(2))
}

export function fahrenheitToKelvin(fahrenheit: number): number {
    return parseFloat(((((fahrenheit - 32 ) * 5) / 9) + 273).toFixed(2))
}

export function kelvinToFahrenheit(kelvin: number): number {
    return parseFloat((((kelvin - 273) * 9 / 5) + 32).toFixed(2))
}

export function kelvinToCelsius(kelvin: number): number {
    return parseFloat((kelvin - 273).toFixed(2))
}