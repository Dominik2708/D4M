interface TeamMemberProps {
  name: string;
  role: string;
}

export function TeamMember({ name, role }: TeamMemberProps) {
  return (
    <div className="text-center">
      <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4"></div>
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
}
