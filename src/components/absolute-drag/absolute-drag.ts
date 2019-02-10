import { Directive, Input, ElementRef, Renderer } from '@angular/core';
import { DomController } from 'ionic-angular';

@Directive({
  selector: '[absolute-drag]'
})
export class AbsoluteDrag {

    @Input('startLeft') startLeft: any;
    @Input('startTop') startTop: any;

    constructor(public element: ElementRef, public renderer: Renderer, public domCtrl: DomController) {

    }

    ngAfterViewInit() {

        this.renderer.setElementStyle(this.element.nativeElement, 'position', 'absolute');
        this.renderer.setElementStyle(this.element.nativeElement, 'left', this.startLeft + 'px');
        this.renderer.setElementStyle(this.element.nativeElement, 'top', this.startTop + 'px');

        let hammer = new window['Hammer'](this.element.nativeElement);
        hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL });

        hammer.on('pan', (ev) => {
          this.handlePan(ev);
        });

    }

    handlePan(ev){

        let newLeft = ev.center.x;
        let newTop = ev.center.y;

        this.domCtrl.write(() => {
          if(newLeft<0){
            newLeft=0;
          }

          if(newLeft>(screen.width.valueOf()- 50)){

            newLeft=screen.width.valueOf() - 50;
          }


          if (newTop >= screen.height.valueOf() - 50){
            newTop =  screen.height.valueOf() - 50;
            console.log("entrei aqui "+newTop)
          }

            this.renderer.setElementStyle(this.element.nativeElement, 'left', newLeft + 'px');
            this.renderer.setElementStyle(this.element.nativeElement, 'top', newTop + 'px');
        });
    }
}
