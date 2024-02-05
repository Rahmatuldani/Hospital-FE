import Swal, { SweetAlertIcon } from 'sweetalert2';

interface AlertProps {
    icon: SweetAlertIcon;
    title: string;
    text: string;
}

function Alert({title, text, icon }: AlertProps) {
    return Swal.fire({
        title,
        text,
        icon
    });
}

export default Alert;