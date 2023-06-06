import { ReactNode } from 'react';
import reactStringReplace from 'react-string-replace';

class TranslationsInternal {
  public replaceReact = (str: any, data: Record<string, string | ReactNode> = {}): ReactNode[] => {
    Object.keys(data).forEach((key: string) => {
      str = reactStringReplace(str, `{${key}}`, () => data[key]);
    });
    return str;
  };

  public replace = (value: string, variables: Record<string, string>): string => {
    Object.keys(variables).forEach((key) => {
      value = value.replace(`{${key}}`, variables[key]);
    });
    return value;
  };

  public getKey = (key: string, noFallback?: boolean): string => {
    const value: string | undefined = window.translations?.[key];
    if (!value) {
      return noFallback ? '' : key;
    }
    return value;
  };
}

export const Translations = new TranslationsInternal();
