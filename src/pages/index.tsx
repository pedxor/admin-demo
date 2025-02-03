import Boosters from "@/components/Bootsters";
import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import TaskTable from "@/components/table/TaskTable";
import Toolbar from "@/components/Toolbar";
import Milestone from "@/components/Milestone";

export default function Index() {
  return (
    <>
      <main>
        <div className="flex min-h-screen flex-col">
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1">
              <Toolbar name="Pedro" />
              <section className="flex min-h-screen flex-col gap-4 bg-light px-5 py-6">
                <div className="flex w-full flex-col gap-4">
                  <div>
                    <Boosters />
                  </div>

                  <div className="grid grid-flow-row gap-4 lg:grid-flow-col">
                    <div className="flex flex-col gap-4 lg:col-span-6">
                      <Hero />

                      <div className="grid grid-flow-row gap-4 xl:grid-flow-col">
                        <div className="xl:col-span-6">
                          <Milestone
                            mode="dark"
                            type="tasks-completed"
                            metric={182}
                            totalTasks={360}
                            label="Your milestones"
                            comparison="12%"
                          />
                        </div>

                        <div className="xl:col-span-6">
                          <Milestone
                            mode="light"
                            type="tasks-left"
                            metric={46}
                            label="Your progress"
                            comparison="43%"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 lg:col-span-6">
                      <TaskTable />

                      <div className="grid grid-flow-row gap-4 xl:grid-flow-col">
                        <div className="xl:col-span-6"></div>

                        <div className="xl:col-span-6"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </main>
    </>
  );
}
