import { Head } from "@/components";
import { HomeLayout } from "@/layout/home";
import { HomePageProps } from "@/layout/home/types";
import { homeService } from "@/services/home";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const { data } = await homeService.find(

  )
  return {
    props: {
      data
    }
  }
}

export default function HomePage (props: InferGetServerSidePropsType<typeof getServerSideProps>) {

  
  return (
    <>
      <Head title="Floreza | Home" description="Home page" />
      <HomeLayout {...props} />
    </>
  )
}
