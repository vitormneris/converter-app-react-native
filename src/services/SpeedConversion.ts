export function kilometerPerHourToMilePerHour(kilometerPerHour: number): number {
    return parseFloat((kilometerPerHour * 0.621371).toFixed(2))
}

export function meterPerSecondToMilePerHour(meterPerSecond: number): number {
    return parseFloat((meterPerSecond *  2.236936).toFixed(2))
}

export function milePerHourToKilometerPerHour(milePerHour: number): number {
    return parseFloat((milePerHour / 0.621371).toFixed(2))
}

export function meterPerSecondToKilometerPerHour(meterPerSecond: number): number {
    return parseFloat((meterPerSecond * 3.6).toFixed(2))
}

export function milePerHourToMeterPerSecond(milePerHour: number): number {
    return parseFloat((milePerHour / 2.236936).toFixed(2))
}

export function kilometerPerHourToMeterPerSecond(kilometerPerHour: number): number {
    return parseFloat((kilometerPerHour / 3.6).toFixed(2))
}