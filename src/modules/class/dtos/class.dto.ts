import { AbstractDto } from '../../../common/dto/abstract.dto.ts';
import { StringField } from '../../../decorators/field.decorators.ts';
import type { ClassEntity } from '../class.entity.ts';

export class ClassDto extends AbstractDto {
  @StringField()
  name?: string;

  constructor(schoolClass: ClassEntity) {
    super(schoolClass);
    this.name = schoolClass.name;
  }
}
