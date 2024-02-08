import Swal, { SweetAlertIcon } from 'sweetalert2';

interface AlertProps {
    icon: SweetAlertIcon;
    title: string;
    text: string;
    cancelButton?: boolean;
    confirmText?: string;
}

function Alert({title, text, icon, cancelButton, confirmText }: AlertProps) {
    return Swal.fire({
        title,
        text,
        icon,
        showCancelButton: cancelButton,
        cancelButtonColor: '#d33',
        confirmButtonColor: '#3085d6',
        confirmButtonText: confirmText ?? 'OK'
    });
}

export default Alert;