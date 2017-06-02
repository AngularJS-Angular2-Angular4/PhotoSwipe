interface Features {
  oldIE: boolean;
  touch: boolean;
  raf: (callback: FrameRequestCallback) => number;
  caf: (handle: number) => void;
  pointerEvent: boolean;
  isOldIOSPhone: boolean;
  isOldAndroid: boolean;
  androidVersion: number;
  isMobileOpera: boolean;
  svg: boolean;
}

interface Options {
  allowPanToNext: boolean,
  spacing: number,
  bgOpacity: number,
  mouseUsed: boolean,
  loop: boolean,
  pinchToClose: boolean,
  closeOnScroll: boolean,
  closeOnVerticalDrag: boolean,
  verticalDragRange: number,
  hideAnimationDuration: number,
  showAnimationDuration: number,
  showHideOpacity: boolean,
  focus: boolean,
  escKey: boolean,
  arrowKeys: boolean,
  mainScrollEndFriction: number,
  panEndFriction: number,
  isClickableElement: (el: Element) => boolean,
  getDoubleTapZoom: (isMouseClick: boolean, item: Item) => number,
  maxSpreadZoom: number,
  modal: boolean,
  scaleMode: string,
  index?: number,
  mainClass?: string,
  galleryPIDs?: any,
  galleryUID?: string,
  history?: any,
  errorMsg?: string,
  getNumItemsFn?: () => number,
  preload?: number[],
  getThumbBoundsFn?: (arg: number) => Bounds,
  forceProgressiveLoading?: boolean
}

interface Point {
  x?: number;
  y?: number;
  id?: string;
}

interface TouchPoint {
  x: number;
  y: number;
  type: string;
}

interface S {
  lastFlickOffset: Point,
  lastFlickDist: Point,
  lastFlickSpeed: Point,
  slowDownRatio: Point,
  slowDownRatioReverse: Point,
  speedDecelerationRatio: Point,
  speedDecelerationRatioAbs: Point,
  distanceOffset: Point,
  backAnimDestination: Point,
  backAnimStarted: Point,
  calculateSwipeSpeed: (axis: string) => void,
  calculateOverBoundsAnimOffset: (axis: string, speed?: number) => void,
  calculateAnimOffset: (axis: string) => void,
  panAnimLoop: () => void,
  now?: number,
  lastNow?: number,
  timeDiff?: number
}

interface Item {
  fitRatio: number,
  container: any,
  initialPosition: Point,
  initialZoomLevel: number,
  w: number,
  h: number,
  msrc: string,
  html: Element,
  initialLayout: Bounds,
  loading: boolean,
  placeholder: Element,
  src: string,
  loaded: boolean,
  img: any,
  imageAppended: boolean,
  needsUpdate: boolean,
  bounds: {
    center: Point
  },
  loadComplete: (item) => void
}

interface Bounds {
  x: number
  y: number
  w: number
}

interface ItemHolder {
  el: any,
  wrap: number,
  index: number,
  item?: Item
}

interface PhotoSwipe {
  //core
  shout(name: string, ...args: any[]): void
  listen(name: string, fn: () => void): void
  viewportSize: Point
  options: Options
  isMainScrollAnimating(): boolean
  getZoomLevel(): number
  getCurrentIndex(): number
  isDragging(): boolean
  isZooming(): boolean
  setScrollOffset(x: number, y: number): void,
  applyZoomPan(zoomLevel: number, panX: number, panY: number, allowRenderResolution: boolean): void
  init(): void
  
  /** Close the gallery, then destroy it */
  close(): void
  
  /** destroys the gallery (unbinds events, cleans up intervals and timeouts to avoid memory leaks) */
  destroy(): void

  /**
   * Pan image to position
   * @param {Number} x     
   * @param {Number} y     
   * @param {Boolean} force Will ignore bounds if set to true.
   */
  panTo(x:number, y: number, force?: boolean): void
  handleEvent(e): void
  goTo(index: number): void
  next() : void
  prev(): void

  /** update current zoom/pan objects */
  updateCurrZoomItem(emulateSetContent?: boolean): void
  invalidateCurrItems(): void
  updateCurrItem(beforeAnimation?: boolean): void
  updateSize(force?: boolean): void,
  
  /** zoom current item to */
  zoomTo(destZoomLevel, centerPoint, speed, easingFn?, updateFn?),
  
  //desktop-zoom
  setupDesktopZoom?(onInit?),
  handleMouseWheel?(e): void,
  toggleDesktopZoom?(centerPoint),
  
  //gestures
  
  //history
  onHashChange(e),
  updateURL(),
  
  //items-controller
  lazyLoadItem(index: number),
  getItemAt(index: number): Item,
  allowProgressiveImg(): boolean,
  setContent(item, index),
  cleanSlide(item)
  
  //tap
  onTapStart(touchList),
  onTapRelease(e, releasePoint)
  
  //other public vars
  currItem: Item,
  bg,
  scrollWrap,
  framework,
  template,
  container,
  itemHolders,
  ui,
  mouseZoomedIn: boolean,
  likelyTouchDevice: boolean,
  items: Item[],
}
