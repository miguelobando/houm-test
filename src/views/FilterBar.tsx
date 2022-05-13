import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  List,
  ListItem,
} from "@mui/material";
import { useState } from "react";
import {
  ButtonSuscribe,
  PaperHoum,
  TypographyFilter,
  TypographyFilterOption,
} from "../styles-css/components";
import { orderParams } from "../app/options";
import { Filter } from "../components/Filter";

export function FilterBar({
  setFilter,
}: {
  setFilter: (id: string, value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Filtros</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <PaperHoum elevation={3}>
          <DialogTitle>
            <TypographyFilter>
              {"Aplica filtros para encontrar el lanzamiento que buscas"}
            </TypographyFilter>
          </DialogTitle>
          <DialogContent
            sx={{
              maxHeight: "60vh",
            }}
          >
            <List
              sx={{
                width: "100%",
                bgcolor: "background.paper",
                maxWidth: "800px",
              }}
            >
              {orderParams.map((e) => {
                return (
                  <ListItem>
                    <Grid container alignItems="center">
                      <Grid item xs={12} sm={12} md={6}>
                        <TypographyFilterOption>
                          {e.label}
                        </TypographyFilterOption>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6}>
                        <Filter setFilter={setFilter} params={e} />
                      </Grid>
                    </Grid>
                  </ListItem>
                );
              })}
            </List>
          </DialogContent>
          <DialogActions>
            <ButtonSuscribe onClick={handleClose}>
              {"Aplicar Filtros"}
            </ButtonSuscribe>
          </DialogActions>
        </PaperHoum>
      </Modal>
    </div>
  );
}
