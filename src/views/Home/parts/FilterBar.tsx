import Modal from "@mui/material/Modal";
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  List,
  ListItem,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  ButtonFilter,
  ButtonSuscribe,
  ChipFilter,
  PaperHoum,
  TypographyFilter,
  TypographyFilterOption,
} from "../../../styles/components";
import { orderParams } from "../../../app/options";
import { Filter } from "./Filter";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import CloseIcon from "@mui/icons-material/Close";

const initialState = {
  launch_year: "",
  site_id: "",
  rocket_name: "",
  launch_success: "",
};

export function FilterBar({
  setFilter,
}: {
  setFilter: (a: Record<string, string>) => void;
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [query, setQuery] = useState<Record<string, string>>(initialState);
  const setStack = (key: string, value: string) => {
    const result = { ...query };
    result[key] = value;
    setQuery(result);
  };

  const setAllQuery = () => {
    setFilter(query);
    handleClose();
  };

  useEffect(() => {
    if (open) {
      setQuery(initialState);
    }
  }, [open]);

  return (
    <div>
      <ButtonFilter onClick={handleOpen}>
        <TuneRoundedIcon /> Filtros
      </ButtonFilter>
      {Object.entries(query).map(([k, v]) => {
        if (v !== "remove" && v !== "") {
          return (
            <ChipFilter
              label={v === "false" ? "Fallido" : v === "true" ? "Exitoso" : v}
            />
          );
        } else {
          return <></>;
        }
      })}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <PaperHoum elevation={3}>
          <DialogTitle>
            <CloseIcon
              onClick={() => handleClose()}
              sx={{ cursor: "pointer", color: "#ff5000" }}
            />
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
              {orderParams.map((e, i) => {
                return (
                  <>
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
                    {orderParams.length - 1 !== i && (
                      <Divider
                        sx={{
                          marginBottom: "10px",
                        }}
                      />
                    )}
                  </>
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
