import * as b2 from "@box2d";
import { Settings } from "./settings.js";
import { Test } from "./test.js";
export declare class Main {
    m_time_last: number;
    m_fps_time: number;
    m_fps_frames: number;
    m_fps: number;
    m_fps_div: HTMLDivElement;
    m_debug_div: HTMLDivElement;
    readonly m_settings: Settings;
    m_test?: Test;
    m_test_select: HTMLSelectElement;
    m_shift: boolean;
    m_ctrl: boolean;
    m_lMouseDown: boolean;
    m_rMouseDown: boolean;
    readonly m_projection0: b2.Vec2;
    readonly m_viewCenter0: b2.Vec2;
    m_demo_mode: boolean;
    m_demo_time: number;
    m_max_demo_time: number;
    m_canvas_div: HTMLDivElement;
    m_canvas_2d: HTMLCanvasElement;
    m_ctx: CanvasRenderingContext2D | null;
    m_demo_button: HTMLInputElement;
    constructor(time: number);
    HomeCamera(): void;
    MoveCamera(move: b2.Vec2): void;
    ZoomCamera(zoom: number): void;
    private m_mouse;
    HandleMouseMove(e: MouseEvent): void;
    HandleMouseDown(e: MouseEvent): void;
    HandleMouseUp(e: MouseEvent): void;
    HandleTouchMove(e: TouchEvent): void;
    HandleTouchStart(e: TouchEvent): void;
    HandleTouchEnd(e: TouchEvent): void;
    HandleMouseWheel(e: MouseWheelEvent): void;
    HandleKeyDown(e: KeyboardEvent): void;
    HandleKeyUp(e: KeyboardEvent): void;
    UpdateTest(time_elapsed: number): void;
    DecrementTest(): void;
    IncrementTest(): void;
    LoadTest(restartTest?: boolean): void;
    Pause(): void;
    SingleStep(): void;
    ToggleDemo(): void;
    SimulationLoop(time: number): void;
}