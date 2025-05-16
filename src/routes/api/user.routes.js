import {Router} from '../custom-router.js'
import passport from 'passport'
import {userService} from '../../services/user-service.js'
import {checkRole} from '../../middlewares/auth/check-role.js'
import {isAuth} from '../../middlewares/is-auth.js'
import {validatorRegister} from '../../middlewares/validators/user-express-validator.js'
import {validatorRegisterJoi} from '../../middlewares/validators/user-joi-validator.js'
import {validatorRegisterJSONSchema} from '../../middlewares/validators/user-json-schema-validator.js'
import {validatorJS} from '../../middlewares/validators/user-validator.js'

export default class UserRouter extends Router {
    init() {
        this.router.param('email', (req, res, next, email) => {
            const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
            if (!emailRegex.test(email)) {
                return res.status(400).json({ message: 'Email inválido' });
            }
            req.validatedEmail = email
            next()
        })

        this.get('/', ['PUBLIC'], (req, res) => res.send('Ruta pública de usuarios'))

        this.post('/register', ['PUBLIC'],
            validatorJS,
            // validatorRegister,
            // validatorRegisterJoi,
            // validatorRegisterJSONSchema,
            async (req, res, next) => {
                try {
                    const newUser = await userService.register(req.body)
                    res.status(201).json(newUser)
                } catch (error) {
                    next(error)
                }
            }
        )

        this.post('/login', ['PUBLIC'], async (req, res, next) => {
            try {
                const { email, password } = req.body
                const result = await userService.login(email, password)
                res.status(200).json(result)
            } catch (error) {
                next(error)
            }
        })

        this.get('/profile', ['USER', 'ADMIN'],
            passport.authenticate('jwt', { session: false }),
            async (req, res, next) => {
                try {
                    const user = await userService.getById(req.user.id);
                    res.status(200).json(user)
                } catch (error) {
                    next(error)
                }
            }
        )

        this.get('/:email', ['USER', 'ADMIN'],
            passport.authenticate('jwt', { session: false }),
            async (req, res, next) => {
                try {
                    const user = await userService.getByEmail(req.validatedEmail)
                    res.status(200).json(user)
                } catch (error) {
                next(error)
                }
            }
        )

        this.get('/private/headers', ['USER', 'ADMIN'],
            passport.authenticate('jwt-cookies'),
            (req, res) => res.json(req.user)
        )

        this.get('/private-cookies', ['USER', 'ADMIN'],
            passport.authenticate('jwt-cookies'),
            (req, res) => res.send(req.user)
        )

        this.get('/private-cookies-admin', ['ADMIN'],
            passport.authenticate('jwt-cookies'),
            isAuth,
            checkRole('admin'),
            (req, res) => res.send(req.user)
        )

        this.get('/admin/dashboard', ['ADMIN'],
            passport.authenticate('jwt-cookies'),
            isAuth,
            checkRole('admin'),
            (req, res) => res.status(200).json({ message: 'Panel admin' })
        )

        this.get('*', ['PUBLIC'], (req, res) => {
            res.status(404).json({ message: 'Ruta inexistente' })
        })
    }
}

export const userRouter=new UserRouter()