import { UserEntity } from 'modules/user/user.entity.ts';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity.ts';
import { UseDto } from '../../decorators/use-dto.decorator.ts';
import { ClassDto } from './dtos/class.dto.ts';

@Entity({ name: 'classes' })
@UseDto(ClassDto)
export class ClassEntity extends AbstractEntity<ClassDto> {
  @Column({ nullable: false, type: 'varchar' })
  name!: string;

  @ManyToMany(() => UserEntity, (user) => user.classes)
  @JoinTable({
    name: 'class_users',
    joinColumn: {
      name: 'class_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
  })
  users?: UserEntity[];
}
