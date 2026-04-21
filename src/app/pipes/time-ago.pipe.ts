import { ChangeDetectorRef, Pipe, PipeTransform, OnDestroy, NgZone } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  standalone: true,
  pure: false
})
export class TimeAgoPipe implements PipeTransform, OnDestroy {
  private timer: ReturnType<typeof setInterval> | null = null;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  transform(value: Date): string {
    this.removeTimer();
    this.createTimer();

    const now = new Date().getTime();
    const date = new Date(value).getTime();
    const seconds = Math.floor((now - date) / 1000);

    if (seconds < 60) return `${seconds} seconds ago`;

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;

    const days = Math.floor(hours / 24);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }

  ngOnDestroy(): void {
    this.removeTimer();
  }

  private createTimer(): void {
    if (this.timer) return;

    this.ngZone.runOutsideAngular(() => {
      this.timer = setInterval(() => {
        this.ngZone.run(() => {
          this.changeDetectorRef.markForCheck();
        });
      }, 30000);
    });
  }

  private removeTimer(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
}