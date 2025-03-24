/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common'
import { ProjetoPrisma } from './projeto.prisma'
import { ProjetoController } from './projeto.controller'
import { DbModule } from 'src/db/db.module'

@Module({
	controllers: [ProjetoController],
	providers: [ProjetoPrisma],
	imports: [DbModule],
})
export class ProjetoModule {}
