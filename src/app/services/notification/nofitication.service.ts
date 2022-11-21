import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NofiticationService {

  constructor(private _snackBar: MatSnackBar) { }

  showSuccess(message: string, textAction?: string, duration?: number): MatSnackBarRef<TextOnlySnackBar> {
    return this._snackBar.open(message, textAction, {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: [
        'snackbar-light',
        'bg-success',
        'text-white',
        'font-bold'
      ],
      duration: duration ? duration : 5000
    });
  }

  showError(message: string, textAction?: string, duration?: number): MatSnackBarRef<TextOnlySnackBar> {
    return this._snackBar.open(message, textAction, {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: [
        'bg-danger',
        'textwhite',
        'font-bold'
      ],
      duration: duration ? duration : 5000
    });
  }

  showInfo(message: string, textAction?: string, duration?: number): MatSnackBarRef<TextOnlySnackBar> {
    return this._snackBar.open(message, textAction, {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: [
        'snackbar-light',
        'bg-primary-default',
        'text-white',
        'dark:bg-default-800',
        'dark:text-primary-default',
        'font-bold'
      ],
      duration: duration ? duration : 5000
    });
  }
}
