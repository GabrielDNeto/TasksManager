import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'
import Task from 'App/Models/Task'

export default class TasksController {
  public async index({ view }: HttpContextContract){
      const tasks = await Task.all()
      const clients = await Client.all()
      return view.render('panel', {tasks, clients})
  }

  public async store({request, response, session}: HttpContextContract){
    await Task.create({
      task_title: request.input('task_title'),
      task_description: request.input('task_description'),
      task_client: request.input('task_client'),
      task_status: request.input('task_status'),
    })

    session.flash('notification', 'Tarefa adicionada com sucesso')

    return response.redirect('back')
  }

  public async update ({params, request, response, session}: HttpContextContract){
    const task = await Task.findOrFail(params.id)
    task.task_title = request.input('task_title')
    task.task_description = request.input('task_description')
    task.task_client = request.input('task_client')

    await task.save();

    session.flash('notification', 'Tarefas atualizada com sucesso!')

    return response.redirect('back')
    
  }

  public async destroy ({ params, session, response}: HttpContextContract){
    const task = await Task.findOrFail(params.id)

    await task.delete();

    session.flash('notification', 'Tarefa deletada com sucesso!')

    return response.redirect('back')
  }
}
