import { rest } from 'msw'

export const handlers = [
  rest.get('/api/test', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: 'client-data'
      })
    )
  }),
  rest.get('https://test.com', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: 'server-data'
      })
    )
  }),
  rest.get('/api/user/:id', (req, res, ctx) => {
    const { id: userId } = req.params

    if (userId === '1') {
      return res(
        ctx.status(200),
        ctx.delay(1000),
        ctx.json({
          name: 'Joey',
          info: 'Hi, I am a web developer'
        })
      )
    } else if (userId === '2') {
      return res(
        ctx.status(200),
        ctx.delay(1000),
        ctx.json({
          name: 'Tom',
          info: 'Hi, I am a front-end developer'
        })
      )
    } else if (userId === '3') {
      return res(
        ctx.status(200),
        ctx.delay(1000),
        ctx.json({
          name: 'Mable',
          info: 'Hi, I am a explorer'
        })
      )
    } else {
      return res(
        ctx.status(400),
        ctx.delay(1000),
        ctx.json({
          error: 'no one'
        })
      )
    }
  })
]
