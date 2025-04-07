declare module "charming" {
  export default function charming(
    element: HTMLElement,
    options?: {
      tagName?: string;
      setClassName?: (index: number, letter?: string) => string;
      split?: (input: string) => string;
    }
  ): void;
}
