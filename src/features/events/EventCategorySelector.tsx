import { Link } from "react-router-dom";
import { Badge } from "../../components/ui/Badge";
import type { TicketCategory } from "../../types/domain";
import { formatCurrency } from "../../utils/date";

type EventCategorySelectorProps = {
  categories: TicketCategory[];
  eventId: string;
  selectedCategoryId: string;
  onSelect: (categoryId: string) => void;
};

const categoryStatusLabels = {
  available: "Disponivel",
  limited: "Poucos lugares",
  "sold-out": "Esgotado",
};

export function EventCategorySelector({
  categories,
  eventId,
  onSelect,
  selectedCategoryId,
}: EventCategorySelectorProps) {
  return (
    <>
      {categories.map((category) => {
        const isSelected = category.id === selectedCategoryId;
        const isDisabled = category.status === "sold-out";

        return (
          <label
            className={[
              "ticket-option",
              isSelected ? "ticket-option--selected" : "",
              isDisabled ? "ticket-option--disabled" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            key={category.id}
          >
            <input
              checked={isSelected}
              disabled={isDisabled}
              name="ticket-category"
              onChange={() => onSelect(category.id)}
              type="radio"
            />
            <span>
              <strong>{category.name}</strong>
              <small>{category.description}</small>
              <small className="ticket-option__benefits">
                {category.benefits.join(" • ")}
              </small>
            </span>
            <span className="ticket-option__side">
              <Badge
                variant={
                  category.status === "limited"
                    ? "accent"
                    : category.status === "sold-out"
                      ? "danger"
                      : "success"
                }
              >
                {categoryStatusLabels[category.status]}
              </Badge>
              <strong>{formatCurrency(category.price)}</strong>
            </span>
          </label>
        );
      })}

      <Link
        className="button button--primary"
        to={`/eventos/${eventId}/assentos?categoria=${selectedCategoryId}`}
      >
        Escolher assento
      </Link>
    </>
  );
}
