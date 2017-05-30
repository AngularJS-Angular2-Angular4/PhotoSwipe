

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
  isClickableElement: (el) => boolean,
  getDoubleTapZoom: (isMouseClick, item) => number,
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
  getThumbBoundsFn?: (number) => any,
  forceProgressiveLoading?: boolean
}

interface Point {
  x?: number;
  y?: number;
}

interface PointWithId extends Point {
  id?: string
}

interface S {
  lastFlickOffset,
  lastFlickDist,
  lastFlickSpeed,
  slowDownRatio,
  slowDownRatioReverse,
  speedDecelerationRatio,
  speedDecelerationRatioAbs,
  distanceOffset,
  backAnimDestination,
  backAnimStarted,
  calculateSwipeSpeed: (axis: string) => void,
  calculateOverBoundsAnimOffset: (axis: string, speed?) => void,
  calculateAnimOffset: (axis: string) => void,
  panAnimLoop: () => void,
  now?: number,
  lastNow?: number,
  timeDiff?: number
}

interface PhotoSwipe {
  //core
  shout(name, ...args: any[])
  listen(name, fn)
  viewportSize: Point
  options: Options
  isMainScrollAnimating()
  getZoomLevel()
  getCurrentIndex()
  isDragging()
  isZooming()
  setScrollOffset(x: number, y: number),
  applyZoomPan(zoomLevel,panX,panY,allowRenderResolution)
  init()
  
  /** Close the gallery, then destroy it */
  close()
  
  /** destroys the gallery (unbinds events, cleans up intervals and timeouts to avoid memory leaks) */
  destroy()

  /**
   * Pan image to position
   * @param {Number} x     
   * @param {Number} y     
   * @param {Boolean} force Will ignore bounds if set to true.
   */
  panTo(x:number, y: number, force?: boolean)
  handleEvent(e)
  goTo(index: number)
  next() 
  prev()

  /** update current zoom/pan objects */
  updateCurrZoomItem(emulateSetContent?)
  invalidateCurrItems()
  updateCurrItem(beforeAnimation?)
  updateSize(force?),
  
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
  getItemAt(index: number),
  allowProgressiveImg(): boolean,
  setContent(item, index),
  cleanSlide(item)
  
  //tap
  onTapStart(touchList),
  onTapRelease(e, releasePoint)
  
  //other public vars
  currItem,
  bg,
  scrollWrap,
  framework,
  template,
  container,
  itemHolders,
  ui,
  mouseZoomedIn: boolean,
  likelyTouchDevice: boolean,
  items,
}
