import type { Seat } from "../../types/domain";

type SeatMapProps = {
  onSelectSeat: (seatId: string) => void;
  seats: Seat[];
  selectedSeatId: string | null;
};

export function SeatMap({ onSelectSeat, seats, selectedSeatId }: SeatMapProps) {
  const seatsByRow = seats.reduce<Record<string, Seat[]>>((accumulator, seat) => {
    if (!accumulator[seat.row]) {
      accumulator[seat.row] = [];
    }

    accumulator[seat.row].push(seat);
    return accumulator;
  }, {});

  return (
    <div className="seat-map" aria-label="Mapa de assentos">
      {Object.entries(seatsByRow).map(([row, rowSeats]) => (
        <div className="seat-map__row" key={row}>
          <span className="seat-map__row-label">{row}</span>
          <div className="seat-map__row-grid">
            {rowSeats.map((seat) => {
              const seatLabel = `${seat.row}${seat.number}`;
              const isSelected = seat.id === selectedSeatId;
              const isOccupied = seat.status === "occupied";

              return (
                <button
                  aria-label={
                    isSelected
                      ? `Assento ${seatLabel} selecionado`
                      : isOccupied
                        ? `Assento ${seatLabel} ocupado`
                        : `Selecionar assento ${seatLabel}`
                  }
                  className={[
                    "seat-preview",
                    isOccupied ? "seat-preview--occupied" : "",
                    isSelected ? "seat-preview--selected" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  disabled={isOccupied}
                  key={seat.id}
                  onClick={() => onSelectSeat(seat.id)}
                  type="button"
                >
                  {seatLabel}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
