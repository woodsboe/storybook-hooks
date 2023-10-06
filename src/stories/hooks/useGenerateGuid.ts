import {v5 as uuidv5} from 'uuid';

export type GenerateGuidProps = {
  input: string;
};

export function useGenerateGuid({ input }: GenerateGuidProps) {
  const myNamespace = 'ebc83281-d51d-4282-ae76-4fc5cf9e73f5';
  return uuidv5(input, myNamespace);
}
