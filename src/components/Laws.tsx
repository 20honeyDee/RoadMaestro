import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: '300px', // mobile
    sm: '400px', // small screens
  },
  height: {
    xs: '60vh',
  },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  overflowY: 'scroll',
  textAlign: 'justify',
};


type LawCardProps = {
    title: string;
    description: string;
    fine?: React.ReactNode;
    penalty?: string;
    className?: string;
}

const LawsAndFines: React.FC<LawCardProps> = ({ title, description, fine, penalty }) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return(
        <div className="">

            <div className="p-2">
                <p className="text-sm text-white cursor-pointer underline underline-offset-2 hover:text-blue-800 font-bold text-justify"
                    onClick={handleOpen}
                >
                    {title}
                </p>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                // className='bg-amber-500'
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className='border-b-2 p-1 text-center'>
                        {title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt:1, px: 2 }}>
                        {description}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, px: 2 }}>
                        {fine} <br/>
                        {penalty}
                    </Typography>
                </Box>
                
            </Modal>

        </div>
    );
};

export default LawsAndFines;