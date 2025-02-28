import Marquee from 'react-fast-marquee';
import AnsibleIcon from '../assets/images/ansible.svg';
import AWSIcon from '../assets/images/aws.svg';
import DockerIcon from '../assets/images/docker.svg';
import GCPIcon from '../assets/images/gcp.svg';
import GoLangIcon from '../assets/images/go.svg';
import GraphQLIcon from '../assets/images/graphql.svg';
import HelmChatIcon from '../assets/images/helm.svg';
import KafkaIcon from '../assets/images/kafka.svg';
import KubernetesIcon from '../assets/images/kubernetes.svg';
import MongoDBIcon from '../assets/images/mongodb.svg';
import NodeJSIcon from '../assets/images/node.js.svg';
import PHPIcon from '../assets/images/PHP.svg';
import PostgresIcon from '../assets/images/postgres.svg';
import PythonIcon from '../assets/images/python.svg';
import TerraformIcon from '../assets/images/terraform.svg';

export function Skills() {
  const skills = [
    {
      name: 'Ansible',
      icon: AnsibleIcon,
    },
    {
      name: 'AWS',
      icon: AWSIcon,
    },
    {
      name: 'Docker',
      icon: DockerIcon,
    },
    {
      name: 'GCP',
      icon: GCPIcon,
    },
    {
      name: 'Go',
      icon: GoLangIcon,
    },
    {
      name: 'GraphQL',
      icon: GraphQLIcon,
    },
    {
      name: 'Helm',
      icon: HelmChatIcon,
    },
    {
      name: 'Kafka',
      icon: KafkaIcon,
    },
    {
      name: 'Kubernetes',
      icon: KubernetesIcon,
    },
    {
      name: 'MongoDB',
      icon: MongoDBIcon,
    },
    {
      name: 'Node.js',
      icon: NodeJSIcon,
    },
    {
      name: 'PHP',
      icon: PHPIcon,
    },
    {
      name: 'PostgresQL',
      icon: PostgresIcon,
    },
    {
      name: 'Python',
      icon: PythonIcon,
    },
    {
      name: 'Terraform',
      icon: TerraformIcon,
    },
  ];
  return (
    <>
      <Marquee>
        {skills.map((skill, index) => {
          return (
            <div
              className={`px-10 ${index < skills.length - 1 ? 'mr-10' : ''}`}
            >
              <img
                src={skill.icon}
                height={80}
                width={80}
                className='grayscale invert'
              />
              <div className='text-midnight-shadow font-quicksand text-center mt-5'>
                {skill.name}
              </div>
            </div>
          );
        })}
      </Marquee>
    </>
  );
}
