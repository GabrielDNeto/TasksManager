import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'

export default class ClientsController {
  public async index({view}: HttpContextContract){
    return view.render('clients')
  }

  public async store({request, response, session}: HttpContextContract){

    await Client.create({
      client_name: request.input('client_name'),
      client_phone: request.input('client_phone'),
      client_email: request.input('client_email'),
      client_adress: request.input('client_adress')
    })

    session.flash('notification', 'Cliente adicionado com sucesso!')

    return response.redirect('back')
  }
}
