import CommitteeMembers from 'components/locals/NCC/NccSite/Committee';
import AuthLayout from 'layouts/authLayout';

const CommitteePage = () => {
  return (
    <AuthLayout userType="ncc" sticky={true}>
      <CommitteeMembers />
    </AuthLayout>
  );
};

export default CommitteePage;
