import { Card } from "../../components/ui/Card";

type ProfileSummaryProps = {
  email: string;
  pastCount: number;
  totalTickets: number;
  upcomingCount: number;
  userName: string;
};

export function ProfileSummary({
  email,
  pastCount,
  totalTickets,
  upcomingCount,
  userName,
}: ProfileSummaryProps) {
  return (
    <Card className="profile-summary">
      <div>
        <p className="profile-summary__eyebrow">Conta ativa</p>
        <h2>{userName}</h2>
        <p className="muted-copy">{email}</p>
      </div>

      <div className="profile-summary__stats">
        <div>
          <strong>{totalTickets}</strong>
          <span>Ingressos</span>
        </div>
        <div>
          <strong>{upcomingCount}</strong>
          <span>Proximos</span>
        </div>
        <div>
          <strong>{pastCount}</strong>
          <span>Passados</span>
        </div>
      </div>
    </Card>
  );
}
