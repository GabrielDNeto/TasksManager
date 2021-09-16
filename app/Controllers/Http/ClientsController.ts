import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ClientsController {
  public async index({view}: HttpContextContract){
    return view.render('clients')
  }

  // public async store({request, response}: HttpContextContract){

  // }
}
