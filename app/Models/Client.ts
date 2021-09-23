import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Task from './Task'

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public client_name: string

  @column()
  public client_phone: string

  @column()
  public client_email: string

  @column()
  public client_adress: string

  @hasMany(() => Task)
  public tasks: HasMany<typeof Task>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
