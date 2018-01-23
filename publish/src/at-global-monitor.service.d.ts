export interface Position {
    x: number;
    y: number;
}
export declare class AtGlobalMonitorService {
    constructor();
    lastClickPosition: Position;
    clickDocumentObserve(): void;
}
