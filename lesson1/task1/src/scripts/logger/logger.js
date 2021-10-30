export const createLogger = name => {
  const logs = []

  return {
    log(msg) {
      logs.push(`log – ${name} – ${msg}`)
    },
    error(errorText) {
      logs.push(`error – ${name} – ${errorText}`)
    },
    getLogs() {
      return logs
    },
  }
}