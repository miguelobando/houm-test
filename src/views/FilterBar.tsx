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
  ButtonFilter,
  ButtonSuscribe,
  PaperHoum,
  TypographyFilter,
  TypographyFilterOption,
} from "../styles-css/components";
import { orderParams } from "../app/options";
import { Filter } from "../components/Filter";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
export function FilterBar({
  setFilter,
}: {
  setFilter: (a: Record<string, string>) => void;
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [query, setQuery] = useState<Record<string, string>>({
    launch_year: "",
    site_id: "",
    rocket_name: "",
    launch_success: "",
  });
  const setStack = (key: string, value: string) => {
    const result = { ...query };
    result[key] = value;
    setQuery(result);
  };

  const setAllQuery = () => {
    setFilter(query);
    handleClose();
  };

  return (
    <div>
      <ButtonFilter onClick={handleOpen}>
        <TuneRoundedIcon /> Filtros
      </ButtonFilter>
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
                        <Filter setStack={setStack} params={e} />
                      </Grid>
                    </Grid>
                  </ListItem>
                );
              })}
            </List>
          </DialogContent>
          <DialogActions>
            <ButtonSuscribe onClick={() => setAllQuery()}>
              {"Aplicar Filtros"}
            </ButtonSuscribe>
          </DialogActions>
        </PaperHoum>
      </Modal>
    </div>
  );
}
