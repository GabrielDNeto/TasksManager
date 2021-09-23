import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Client from './Client'

export default class Task extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public task_title: string

  @column()
  public task_description: string

  @column()
  public task_client: string

  @column()
  public task_status: number

  @hasOne(() => Client)
  public client: HasOne<typeof Client>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}