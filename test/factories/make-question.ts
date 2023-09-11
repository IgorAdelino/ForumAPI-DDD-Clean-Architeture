import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Question,
  QuestionProps,
} from '@/domain/forum/enterprise/entities/question'
import { Slug } from '@/domain/forum/enterprise/entities/value-objects/slug'

export function MakeQuestion(override: Partial<QuestionProps> = {}) {
  const question = Question.create({
    title: 'Example question',
    slug: Slug.create('example-question'),
    authorId: new UniqueEntityID(),
    content: '1',
    ...override,
  })

  return question
}
