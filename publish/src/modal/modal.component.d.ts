import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import { AtGlobalMonitorService, Position } from "../at-global-monitor.service";
import { CdkOverlayOrigin, ConnectionPositionPair } from "@angular/cdk/overlay";
import { ModalBodyDirective } from "./modal-body.directive";
export declare class ModalComponent implements OnInit {
    private global_service;
    constructor(global_service: AtGlobalMonitorService);
    ngOnInit(): void;
    state: string;
    position: Position;
    icon_status: {
        'info': string;
        'error': string;
        'warning': string;
        'success': string;
        'loading': string;
    };
    private _closeable;
    private _atType;
    private _status;
    private _show;
    private _message;
    _positions: ConnectionPositionPair[];
    width: number;
    top: number;
    maskClose: boolean;
    onCancel: EventEmitter<boolean>;
    onOk: EventEmitter<boolean>;
    modal_content: ElementRef;
    _overlay: CdkOverlayOrigin;
    body: ModalBodyDirective;
    readonly overlay: {
        elementRef: CdkOverlayOrigin;
    };
    closeable: boolean;
    message: string;
    title: string;
    atType: "normal" | "confirm";
    status: "error" | "success" | "warning" | "info";
    show: boolean;
    cancel(): void;
    setShow(): void;
    positionStyle: {};
    setStyle(): void;
    ok(): void;
    cancelFromMask(e: any): void;
    customTitle: ElementRef;
    headerContains(): boolean;
    ngAfterViewInit(): void;
}