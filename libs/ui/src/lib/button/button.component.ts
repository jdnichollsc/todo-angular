import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

const variantStyles = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
  ghost: 'btn-ghost',
};

@Component({
  selector: 'lib-ui-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'accent' | 'ghost' = 'primary';
  @Input() class = '';

  get variantStyle() {
    return variantStyles[this.variant];
  }
}
