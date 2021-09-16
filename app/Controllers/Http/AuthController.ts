import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async showLogin({view}: HttpContextContract){
    return view.render('login')
  }

  public async login({request, response, auth, session}: HttpContextContract){
    const username = request.input('username')
    const password = request.input('password')

    try{
      await auth.use('web').attempt(username, password)

      return response.redirect('/')
    } catch (error) {
      session.flash('notification', 'Credenciais Inválidas')
      return response.redirect('back')
    }
  }
}
