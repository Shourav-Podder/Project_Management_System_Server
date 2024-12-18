import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
const app:Application = express()

// Application route

import userRoutes from './app/modules/user/user.route';
import propertyRoutes from './app/modules/property/property.route';

// Using cors
app.use(cors())

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use("/api/v1/user", userRoutes)
app.use("/api/v1/property", propertyRoutes)

export default app;