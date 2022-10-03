import type { Express } from 'express'

const runHttpServer = (app: Express): void => {
  const PORT = Number(process.env.PORT)
  const server = app.listen(PORT, () => {
    console.info(`App server is listening to PORT: ${PORT}`)
  })

  server.on('error', (err: NodeJS.ErrnoException) => {
    console.error(err.message)
    throw err
  })

  const serverCloseHandler = (exitCode: number) => () => {
    server.close(() => {
      process.exit(exitCode)
    })
  }

  ['uncaughtException', 'unhandledRejection'].forEach((event) => {
    process.on(event, serverCloseHandler(1))
  })
}

export default runHttpServer
