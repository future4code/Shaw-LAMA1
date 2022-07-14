import { app } from "./controller/app"
import { userRouter } from "./router/userRouter"
import { bandRouter } from "./router/bandRouter"
import { showsRouter } from "./router/showsRouter"

app.use('/user', userRouter)
app.use('/band', bandRouter)
app.use('/shows', showsRouter)