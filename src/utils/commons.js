const strToBool = (str) => {
    const regex = /^\s*(true|1|on)\s*$/i
    return regex.test(str)
}

export { strToBool }
