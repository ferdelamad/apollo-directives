import { SchemaDirectiveVisitor } from 'graphql-tools';
import { defaultFieldResolver } from 'graphql';
import lodash from 'lodash';

export class renameField extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { name } = this.args;
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async (object, args, context, info) => {
      object[field.name] = object[name];
      delete object[name];
      return resolve.call(this, object, args, context, info);
    };
  }
}

const createFormatStringDirective = method => (
  class extends SchemaDirectiveVisitor {
    visitFieldDefinition(field) {
      const transform = input =>
        typeof input === 'string' ? lodash[method](input) : input
      const { resolve = defaultFieldResolver } = field;
      field.resolve = async function(...args) {
        const result = await resolve.apply(this, args);
        return Array.isArray(result) ? result.map(transform) : transform(result)
      };
    }
  }
);

export const camelCase = createFormatStringDirective(`camelCase`);
export const capitalize = createFormatStringDirective(`capitalize`);
export const lowerCase = createFormatStringDirective(`lowerCase`);
export const lowerFirst = createFormatStringDirective(`lowerFirst`);
export const toLower = createFormatStringDirective(`toLower`);
export const toUpper = createFormatStringDirective(`toUpper`);
export const trim = createFormatStringDirective(`trim`);
export const upperCase = createFormatStringDirective(`upperCase`);
export const upperFirst = createFormatStringDirective(`upperFirst`);
