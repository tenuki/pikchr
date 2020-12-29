// Type definitions for Pikchr 0.0.4
// Project: Pikchr
// Definitions by: david weil

export interface PikchrResultType {
    output: string;
    width: number;
    height: number;
}

export interface PikchrOptions {
    class_name?: string;
    dark_mode?: boolean;
    text_errors?: boolean;
}

export function pikchr(src: string): string;

export function pikchrex(src: string, opts?: PikchrOptions): PikchrResultType;

