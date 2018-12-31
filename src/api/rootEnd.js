import { Router } from 'express'

const router = new Router()

router.get('/data', (req, res) => {
  res.send('Hello World')
})

export default router
module.exports = router
